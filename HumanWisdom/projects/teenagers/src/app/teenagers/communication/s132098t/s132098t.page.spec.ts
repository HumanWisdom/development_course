import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132098tPage } from './s132098t.page';

describe('S132098tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132098tPage;
  let fixture: ComponentFixture<S132098tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132098tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132098tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

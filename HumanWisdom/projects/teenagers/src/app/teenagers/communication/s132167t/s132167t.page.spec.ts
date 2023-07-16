import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132167tPage } from './s132167t.page';

describe('S132167tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132167tPage;
  let fixture: ComponentFixture<S132167tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132167tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132167tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

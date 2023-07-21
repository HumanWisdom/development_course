import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132084tPage } from './s132084t.page';

describe('S132084tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132084tPage;
  let fixture: ComponentFixture<S132084tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132084tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132084tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

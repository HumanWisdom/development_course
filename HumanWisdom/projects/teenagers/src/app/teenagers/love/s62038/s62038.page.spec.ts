import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62038Page } from './s62038.page';

describe('S62038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62038Page;
  let fixture: ComponentFixture<S62038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

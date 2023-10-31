import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62035Page } from './s62035.page';

describe('S62035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62035Page;
  let fixture: ComponentFixture<S62035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

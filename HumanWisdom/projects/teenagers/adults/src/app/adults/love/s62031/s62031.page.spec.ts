import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62031Page } from './s62031.page';

describe('S62031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62031Page;
  let fixture: ComponentFixture<S62031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

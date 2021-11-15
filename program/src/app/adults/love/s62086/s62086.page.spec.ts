import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62086Page } from './s62086.page';

describe('S62086Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62086Page;
  let fixture: ComponentFixture<S62086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

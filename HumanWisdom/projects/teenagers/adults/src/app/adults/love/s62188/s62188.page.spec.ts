import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62188Page } from './s62188.page';

describe('S62188Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62188Page;
  let fixture: ComponentFixture<S62188Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62188Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62188Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

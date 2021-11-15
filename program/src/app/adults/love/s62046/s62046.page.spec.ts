import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62046Page } from './s62046.page';

describe('S62046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62046Page;
  let fixture: ComponentFixture<S62046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

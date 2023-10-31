import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62009Page } from './s62009.page';

describe('S62009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62009Page;
  let fixture: ComponentFixture<S62009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

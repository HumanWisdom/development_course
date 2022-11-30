import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62037Page } from './s62037.page';

describe('S62037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62037Page;
  let fixture: ComponentFixture<S62037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

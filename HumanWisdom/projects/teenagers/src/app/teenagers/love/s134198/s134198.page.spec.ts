import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134198Page } from './s134198.page';

describe('S134198Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134198Page;
  let fixture: ComponentFixture<S134198Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134198Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134198Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

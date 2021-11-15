import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53193Page } from './s53193.page';

describe('S53193Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53193Page;
  let fixture: ComponentFixture<S53193Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53193Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53193Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

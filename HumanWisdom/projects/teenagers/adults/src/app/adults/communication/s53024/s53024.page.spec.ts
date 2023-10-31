import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53024Page } from './s53024.page';

describe('S53024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53024Page;
  let fixture: ComponentFixture<S53024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

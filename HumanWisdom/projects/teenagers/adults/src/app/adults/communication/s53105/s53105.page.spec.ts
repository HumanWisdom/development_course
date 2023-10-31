import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53105Page } from './s53105.page';

describe('S53105Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53105Page;
  let fixture: ComponentFixture<S53105Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53105Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53105Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53235Page } from './s53235.page';

describe('S53235Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53235Page;
  let fixture: ComponentFixture<S53235Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53235Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53235Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

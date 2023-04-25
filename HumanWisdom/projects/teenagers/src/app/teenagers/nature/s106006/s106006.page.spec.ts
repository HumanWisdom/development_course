import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S106006Page } from './s106006.page';

describe('S106006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S106006Page;
  let fixture: ComponentFixture<S106006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S106006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S106006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

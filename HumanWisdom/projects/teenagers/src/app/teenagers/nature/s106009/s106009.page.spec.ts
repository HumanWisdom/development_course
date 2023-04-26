import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S106009Page } from './s106009.page';

describe('S106009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S106009Page;
  let fixture: ComponentFixture<S106009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S106009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S106009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132009Page } from './s132009.page';

describe('S132009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132009Page;
  let fixture: ComponentFixture<S132009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

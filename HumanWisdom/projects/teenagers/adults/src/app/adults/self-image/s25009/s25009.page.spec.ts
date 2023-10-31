import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25009Page } from './s25009.page';

describe('S25009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25009Page;
  let fixture: ComponentFixture<S25009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

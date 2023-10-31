import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64001Page } from './s64001.page';

describe('S64001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64001Page;
  let fixture: ComponentFixture<S64001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

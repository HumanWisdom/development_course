import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64044Page } from './s64044.page';

describe('S64044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64044Page;
  let fixture: ComponentFixture<S64044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

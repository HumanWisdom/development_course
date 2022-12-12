import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64052Page } from './s64052.page';

describe('S64052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64052Page;
  let fixture: ComponentFixture<S64052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

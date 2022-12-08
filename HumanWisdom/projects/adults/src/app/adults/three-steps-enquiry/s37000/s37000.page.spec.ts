import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S37000Page } from './s37000.page';

describe('S37000Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S37000Page;
  let fixture: ComponentFixture<S37000Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S37000Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S37000Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61113Page } from './s61113.page';

describe('S61113Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61113Page;
  let fixture: ComponentFixture<S61113Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61113Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61113Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

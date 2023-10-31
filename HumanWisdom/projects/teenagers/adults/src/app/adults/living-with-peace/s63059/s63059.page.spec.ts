import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63059Page } from './s63059.page';

describe('S63059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63059Page;
  let fixture: ComponentFixture<S63059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

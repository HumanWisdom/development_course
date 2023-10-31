import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63018Page } from './s63018.page';

describe('S63018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63018Page;
  let fixture: ComponentFixture<S63018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

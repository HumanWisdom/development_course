import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64018Page } from './s64018.page';

describe('S64018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64018Page;
  let fixture: ComponentFixture<S64018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

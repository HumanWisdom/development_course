import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64067Page } from './s64067.page';

describe('S64067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64067Page;
  let fixture: ComponentFixture<S64067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

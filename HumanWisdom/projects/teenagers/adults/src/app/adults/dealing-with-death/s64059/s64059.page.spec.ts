import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64059Page } from './s64059.page';

describe('S64059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64059Page;
  let fixture: ComponentFixture<S64059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132011Page } from './s132011.page';

describe('S132011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132011Page;
  let fixture: ComponentFixture<S132011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116089Page } from './s116089.page';

describe('S116089Page', () => {
      
    let component:  S116089Page;
  let fixture: ComponentFixture<S116089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
